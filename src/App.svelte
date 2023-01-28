<script lang="ts">
  import {Router,Route} from 'svelte-routing';
  import Logout from './lib/Logout.svelte';
  import Login from './lib/login.svelte';
  import Main from './lib/visitor/Main.svelte';
  import Landing from './lib/admin/Landing.svelte';
    import Test from './Test.svelte';

</script>



<main>
  <Router>
    <Route path="/visitor">
      <Logout/>
      <Main/>
    </Route>
    <Route path="/admin/*">
      <Logout/>
      <Landing/>
    </Route>
    <Route path="/">
      <Login/>
    </Route>
  </Router>
</main>


<style>
</style>
