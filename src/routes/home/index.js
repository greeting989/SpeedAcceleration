/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Home from './Home';
import Layout from '../../components/Layout';
import Interior from './3d sci-fi spaceship corridor model.png';


async function action({ fetch }) {
  const resp = await fetch('/graphql', {
    body: JSON.stringify({
      query: '{news{title,link,content}}',
    }),
  });
  const { data } = await resp.json();
  if (!data || !data.news) throw new Error('Failed to load the news feed.');
  return {
    title: 'React Starter Kit',
    chunks: ['home'],
    component: (
      <Layout>
        <img  src={Interior} alt="interior" width="100%"/>
      </Layout>
    ),
  };
}

export default action;
