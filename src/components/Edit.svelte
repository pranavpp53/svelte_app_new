<script>
    import { onMount } from "svelte";
    import { Link, navigate } from "svelte-routing";
    import { editPostContent, singlePost } from "../service/allapi";
    import routeParams from "../stores/routeParams";
    import BASE_URL from "../service/baseurl";

    let id;

    // Subscribe to changes in the route parameters
    routeParams.subscribe((params) => {
        id = params.id;
    });

    let post = { title: "", content: "", image: "", date: "" };

    onMount(async () => {
        const response = await singlePost(id);
        if (response.data) {
            post = response.data;
        }
    });

    const editpost = (e) => {
        const { name, value } = e.target;
        post = { ...post, [name]: value };
    };

    const handleSubmit = async () => {
        try {
            const response = await editPostContent(post, id);
            if (response.status <= 210) {
                console.log(response);
                alert(response.data.message);
                navigate(`/view`);
            } else {
                alert(response.data.error);
            }
        } catch (error) {
            console.error(error);
        }
    };
</script>

<div class="view-post-container">
    <div class="post mt-5">
        <img class="postImg" src={`${BASE_URL}/uploads/${post.image}`} alt="" />

        <div class="postInfo">
            <span class="postTitle">
                <input
                    class="link text-center"
                    name="title"
                    bind:value={post.title}
                    on:input={editpost}
                />
            </span>
            <hr />
            <span class="postDate me-5 ms-auto">{post.date}</span>
        </div>
        <textarea
            class="postDesc edit-input"
            name="content"
            bind:value={post.content}
            on:input={editpost}
        />
        <div class="button-container ms-auto mt-3">
            <button
                on:click={handleSubmit}
                class="edit-button edit-edit-button text-success"
            >
                Save changes
            </button>
        </div>
    </div>
</div>

<style>
    .edit-edit-button {
        border: none;
        font-size: 20px;
    }
    .view-post-container {
        display: flex;
        justify-content: space-evenly;
        flex-wrap: wrap;
        margin-top: 50px;
    }

    

  .post {
    width: 30rem;
    margin: 0px 25px 40px 25px;
    display: flex;
    flex-direction: column;
  }
  
  .postImg {
    width: 100%;
    height: 280px;
    object-fit: cover;
    border-radius: 7px;
  }
  
  .postInfo {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  
  .postTitle {
    font-family: "Josefin Sans", Arial, Helvetica, sans-serif;
    font-size: 24px;
    font-weight: 900;
    margin-top: 10px;
    cursor: pointer;
  }
  
  .postDate {
    font-family: "Lora", serif;
    font-style: italic;
    font-size: 21px;
    font-weight: 400;
    color: #5c5a5a;
  }
  
  .postDesc {
    font-family: "Varela Round", Arial, Helvetica, sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    color: #444444;
    margin-top: 15px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
  }

  
img{
  background-size: cover;
}



  




  
  

   
</style>
