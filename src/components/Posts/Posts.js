import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';

import Post from './Post/Post';
import useStyles from './styles';

const Posts = ({ setCurrentId }) => {
  const { posts, isLoading } = useSelector((state) => state.posts);
  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem('profile'));

  if (user?.result?.name) {
    user.name = user.result.name;
  }
  return (
    (!posts?.length || isLoading) ? <CircularProgress /> : (
      <Grid className={classes.container} container alignItems="stretch" spacing={3}>
        {posts.map((post) => (
          <Grid key={post._id} item xs={12} sm={12} md={4} lg={6}>
            <Post post={post} setCurrentId={setCurrentId} user={user?.name} />
          </Grid>
        ))}
      </Grid>
    )
  );
};

export default Posts;
