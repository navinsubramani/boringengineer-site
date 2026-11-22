#!/usr/bin/env bash
# Build the boringengineer site Docker image, reading settings from .env.
#
#   ./build-image.sh          build the image
#   ./build-image.sh --push   build, then tag and push to $REGISTRY
#
# Settings live in .env (gitignored); see .env.example.
set -euo pipefail
cd "$(dirname "$0")"

if [[ -f .env ]]; then
  set -a; source .env; set +a
else
  echo "No .env found; building without analytics. (Create one with: cp .env.example .env)"
fi

IMAGE="${IMAGE_NAME:-boringengineer-site}:${IMAGE_TAG:-latest}"
# Target CPU architecture of the server that runs the image (not this machine).
# Apple Silicon Macs build arm64 by default; most servers are amd64.
PLATFORM="${PLATFORM:-linux/amd64}"

if [[ -z "${POSTHOG_KEY:-}" ]]; then
  echo "⚠️  POSTHOG_KEY is not set; this image will have analytics DISABLED."
elif [[ "$POSTHOG_KEY" != phc_* ]]; then
  echo "❌ POSTHOG_KEY doesn't look like a PostHog project token (should start with phc_)." >&2
  exit 1
else
  echo "✅ PostHog analytics enabled (token ${POSTHOG_KEY:0:8}…)"
fi

echo "🏗  Building $IMAGE for $PLATFORM"
docker build --platform "$PLATFORM" --build-arg POSTHOG_KEY="${POSTHOG_KEY:-}" -t "$IMAGE" .
echo "Built $IMAGE"

if [[ "${1:-}" == "--push" ]]; then
  if [[ -z "${REGISTRY:-}" ]]; then
    echo "❌ Set REGISTRY in .env to use --push." >&2
    exit 1
  fi
  docker tag "$IMAGE" "$REGISTRY/$IMAGE"
  docker push "$REGISTRY/$IMAGE"
  echo "Pushed $REGISTRY/$IMAGE"
fi
