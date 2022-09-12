import axios from 'axios';


export function apiPosts(){
    axios.get('https://jsonplaceholder.typicode.com/posts')
  .then(function (response) {
    // handle success
    console.log("handle success axios.get response:",response);
  })
  .catch(function (error) {
    // handle error
    console.log('handle error:',error);
  })
  .then(function (response) {
    // always executed
    console.log("always executed response:",response);
  });
}

export function apiCommentsOostId(){

    axios.get('https://jsonplaceholder.typicode.com/comments', {
        params: {
          Id: 1
        }
      })
      .then(function (response) {
        console.log("apiCommentsOostId:",response);
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {
        // always executed
      });
}

export function apiMultipleConcurrentRequests() {

    function getPosts() {
        return axios.get('https://jsonplaceholder.typicode.com/posts');
      }
      
      function getPostId() {
        return axios.get('https://jsonplaceholder.typicode.com/comments?postId=1');
      }
      
      Promise.all([getPosts(), getPostId()])
        .then(function (results) {
          const posts = results[0];
          const postId = results[1];
          console.log('apiMultipleConcurrentRequests:',posts,postId)
        });
    
}

// GET request for remote image in node.js
export function apiRequestRemoteImage() {
    axios({
        method: 'get',
        url: 'https://jsonplaceholder.typicode.com/users/1/todos',
        responseType: 'stream',
        params:{
            _limit:5
        }
      })
        .then(function (response) {
            console.log('apiRequestRemoteImage:',response)
        //   response.data.pipe(fs.createWriteStream('ada_lovelace.jpg'))
        });
    
}
/**
 * Creating an instance (axios.create)
 * A simple GitHub API
 * https://blog.logrocket.com/understanding-axios-create/
 */

const gitHub_client_instance = axios.create({
    baseURL: 'https://api.GitHub.com/',
    timeout: 1000,
    headers: {
      'Accept': 'application/vnd.GitHub.v3+json',
      //'Authorization': 'token <your-token-here> -- https://docs.GitHub.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token'
    }
  });

  async function getMostFollowedUsers() {
    const noOfFollowers = 35000;
    const perPage = 10;
    //ref: https://docs.GitHub.com/en/GitHub/searching-for-information-on-GitHub/searching-on-GitHub/searching-users
    const response = await gitHub_client_instance.get(`search/users?q=followers:>${noOfFollowers}&per_page=${perPage}`, {timeout: 1500});
    return response.data.items;
  }

  async function getCounts(username) {
    const response = await gitHub_client_instance.get(`users/${username}`);
    return {
      username,
      name: response.data.name,
      publicReposCount: response.data.public_repos,
      followersCount: response.data.followers
    };  
  }

  export async function axiosCreateInstance(params) {
    try {
        const mostFollowedUsers = await getMostFollowedUsers();
        const popularUsernames = mostFollowedUsers.map(user => user.login);
        const popularUsersWithPublicRepoCount = await Promise.all(popularUsernames.map(getCounts));
        console.table(popularUsersWithPublicRepoCount);
    
        console.log(`======== Another view ========`);
        popularUsersWithPublicRepoCount.forEach((userWithPublicRepos) => {
          console.log(`${userWithPublicRepos.name}, with username: ${userWithPublicRepos.username} has ${userWithPublicRepos.publicReposCount} public repos and ${userWithPublicRepos.followersCount} followers on GitHub`);
        });
      } catch(error) {
        console.log(`Error calling GitHub API: ${error.message}`, error);
      }
      
  }