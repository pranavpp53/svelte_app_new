<script>
    import { Link, Route, Router } from "svelte-routing";
    import Home from "./components/Home.svelte";
    import Navbar from "./components/Navbar.svelte";
    import Login from "./components/login.svelte";
    import Write from "./components/Write.svelte";
    import Userposts from "./components/Userposts.svelte";
    import Edit from "./components/Edit.svelte";
    import View from "./components/View.svelte";
</script>

<main>
    <Navbar></Navbar>
    <Router>
        <Route path="/" component={Home}></Route>
        <Route path="login" component={Login}></Route>
        <Route path="/login" component={Login} />
        <Route path="/write" component={Write} />
        <Route path="/userposts" component={Userposts} />
        <Route path="/edit" component={Edit} />
        <Route path="/view" component={View}></Route>
    </Router>
   
</main>
