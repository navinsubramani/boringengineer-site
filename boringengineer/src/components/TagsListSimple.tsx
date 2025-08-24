import React from 'react';

// tags: { [tag: string]: { label: string, permalink: string, count: number } }
// tagDescriptions: { [tag: string]: string }
export default function TagsListSimple({ tags }: {
  tags: Array<{ label: string, permalink: string, count: number }>,
  tagDescriptions?: Record<string, string>
}) {
  return (
    <ul style={{ listStyle: 'none', padding: 0 }}>
      {tags.map(tag => (
        <li key={tag.label} style={{ marginBottom: '1.5rem', borderBottom: '1px solid #eee', paddingBottom: '1rem' }}>
          <a href={tag.permalink} style={{ fontWeight: 600, fontSize: '1.1rem', color: '#25c2a0', textDecoration: 'none' }}>
            {tag.label}
          </a>
          <span style={{ marginLeft: '1rem', color: '#eee', fontSize: '0.95rem' }}>
            {tag.count} blog{tag.count !== 1 ? 's' : ''}
          </span>
        </li>
      ))}
    </ul>
  );
}
