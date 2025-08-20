import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

const useBase = () =>
  (useDocusaurusContext().siteConfig.customFields as any).ASSETS_BASE as string;

export const AssetImg = (
  { path, ...props }: React.ImgHTMLAttributes<HTMLImageElement> & { path: string }
) => <img src={`${useBase()}${path}`} {...props} />;

export const AssetIframe = (
  { path, ...props }: React.IframeHTMLAttributes<HTMLIFrameElement> & { path: string }
) => <iframe src={`${useBase()}${path}`} {...props} />;

export const AssetLink = (
  { path, children, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement> & { path: string }
) => <a href={`${useBase()}${path}`} {...props}>{children}</a>;

export const AssetVideo = ({ path, ...props }) => {
  const base = (useDocusaurusContext().siteConfig.customFields as any).ASSETS_BASE as string;
  return (
    <div className="responsive-video">
      <video controls src={`${base}${path}`} {...props}></video>
    </div>
  );
};