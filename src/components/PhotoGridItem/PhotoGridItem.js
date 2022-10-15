import React from 'react';
import styled from 'styled-components/macro';

const PhotoGridItem = ({ id, src, alt, tags, srcset }) => {
  return (
    <article>
      <Anchor href={`/photos/${id}`}>
        <Image src={src} srcSet={srcset} alt={alt} />
      </Anchor>
      <Tags>
        {tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </Tags>
    </article>
  );
};

const Anchor = styled.a`
  text-decoration: none;
  color: inherit;
  outline-offset: 4px;
`;

const Image = styled.img`
  display: block;
  width: 100%;
  height: 300px;
  border-radius: 2px;
  margin-bottom: 8px;
  aspect-ratio: 1 / 1;
  object-fit: cover;
`;

const Tags = styled.ul`
  width: 100%;
  height: 100%;
  
  white-space: nowrap;
    text-overflow: ellipsis;
  overflow: hidden;
  vertical-align:  middle; 
`;

const Tag = styled.li`
  display: inline;
  padding: 4px 8px;
  background: var(--color-gray-300);
  font-size: 0.875rem;
  font-weight: 475;
  color: var(--color-gray-800);
  width: fit-content;

  &:not(:first-child) {
    margin-left: 8px;
  }
`;

export default PhotoGridItem;
