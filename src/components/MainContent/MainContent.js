import React from 'react';
import styled from 'styled-components/macro';

import data from '../../data';
import MaxWidthWrapper from '../MaxWidthWrapper';
import PhotoGridItem from '../PhotoGridItem';
import VisuallyHidden from '../VisuallyHidden';

const makeSrcset = (id) => {
  switch (id) {
    case 'a':
      return `
        /images/vincent-van-zalinge-bird.avif,
        /images/vincent-van-zalinge-bird.jpg,
        /images/vincent-van-zalinge-bird@2x.avif,
        /images/vincent-van-zalinge-bird@2x.jpg,
        /images/vincent-van-zalinge-bird@3x.avif,
        /images/vincent-van-zalinge-bird@3x.jpg
      `
    case 'b':
      return `
        /images/alexandru-rotariu-dog.avif,
        /images/alexandru-rotariu-dog.jpg,
        /images/alexandru-rotariu-dog@2x.avif,
        /images/alexandru-rotariu-dog@2x.jpg,
        /images/alexandru-rotariu-dog@3x.avif,
        /images/alexandru-rotariu-dog@3x.jpg
      `
    case 'c':
      return `
          /images/scott-walsh-fox.avif,
          /images/scott-walsh-fox.jpg,
          /images/scott-walsh-fox@2x.avif,
          /images/scott-walsh-fox@2x.jpg,
          /images/scott-walsh-fox@3x.avif,
          /images/scott-walsh-fox@3x.jpg
        `
    case 'd':
      return `
          /images/andy-holmes-giraffe.avif,
          /images/andy-holmes-giraffe.jpg,
          /images/andy-holmes-giraffe@2x.avif,
          /images/andy-holmes-giraffe@2x.jpg,
          /images/andy-holmes-giraffe@3x.avif,
          /images/andy-holmes-giraffe@3x.jpg
        `
    case 'e':
      return `
        /images/karsten-winegeart-dog.avif,
        /images/karsten-winegeart-dog.jpg,
        /images/karsten-winegeart-dog@2x.avif,
        /images/karsten-winegeart-dog@2x.jpg,
        /images/karsten-winegeart-dog@3x.avif,
        /images/karsten-winegeart-dog@3x.jpg
      `
    case 'f':
      return `
          /images/marko-blazevic-cat.avif,
          /images/marko-blazevic-cat.jpg,
          /images/marko-blazevic-cat@2x.avif,
          /images/marko-blazevic-cat@2x.jpg,
          /images/marko-blazevic-cat@3x.avif,
          /images/marko-blazevic-cat@3x.jpg
        `
    case 'g':
      return `
        /images/mark-stoop-lizard.avif,
        /images/mark-stoop-lizard.jpg,
        /images/mark-stoop-lizard@2x.avif,
        /images/mark-stoop-lizard@2x.jpg,
        /images/mark-stoop-lizard@3x.avif,
        /images/mark-stoop-lizard@3x.jpg
      `
    case 'h':
      return `
          /images/geran-de-klerk-squirrel.avif,
          /images/geran-de-klerk-squirrel.jpg,
          /images/geran-de-klerk-squirrel@2x.avif,
          /images/geran-de-klerk-squirrel@2x.jpg,
          /images/geran-de-klerk-squirrel@3x.avif,
          /images/geran-de-klerk-squirrel@3x.jpg
        `
    case 'i':
      return `
        /images/wexor-tmg-turtle.avif,
        /images/wexor-tmg-turtle.jpg,
        /images/wexor-tmg-turtle@2x.avif,
        /images/wexor-tmg-turtle@2x.jpg,
        /images/wexor-tmg-turtle@3x.avif,
        /images/wexor-tmg-turtle@3x.jpg
      `
    default:
  }
}

const MainContent = () => {
  console.warn("test", makeSrcset('a'))
  return (
    <Wrapper>
      <VisuallyHidden>
        <h1>All Photos</h1>
      </VisuallyHidden>
      {data.map(({ id, src, alt, tags }) => (
        <PhotoGridItem
          key={id}
          id={id}
          src={src}
          alt={alt}
          tags={tags}
          srcset={makeSrcset(id)}
        />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled(MaxWidthWrapper)`
  /*
    We haven't covered grid yet, but we'll learn more about
    this technique in a future module!
  */
  display: grid;
  grid-gap: 16px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  padding-top: 128px;
  padding-bottom: 128px;
`;

export default MainContent;
