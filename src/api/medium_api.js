import axios from 'axios'

async function api() {
  try {
    const url =
      'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@bgskinner3';

    const { data } = await axios.get(url);
    return data;
  } catch (error) {
    console.error(error);
  }
}

async function get_most_recent_medium_articles() {
  try {
    const post_data = [];
    const medium_posts = await api();

    if (medium_posts) {
      const articles = medium_posts.items.slice(0, 4)

      for (const article of articles) {
        const description = article.description;
        const start = description.indexOf('<p>') + 3;
        const post_object = {};
        post_object.url = article.link;
        post_object.picture = article.thumbnail;
        post_object.title = article.title
        post_object.description = description.slice(start, start + 300);

        post_data.push(post_object);
      }
      return post_data;
    }
  } catch (error) {
    console.error(error);
  }
}

export default get_most_recent_medium_articles
