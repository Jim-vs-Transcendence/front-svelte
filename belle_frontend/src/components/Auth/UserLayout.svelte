<script lang="ts">
	import { goto } from '$app/navigation';
  import { authToken } from '../../service/store';
  import '../../service/userDTO';
  export let userInfo: UserDTO ;

  //css
  import { AppBar } from '@skeletonlabs/skeleton';
  import { Avatar } from '@skeletonlabs/skeleton';
  import { LightSwitch } from '@skeletonlabs/skeleton';
  import { Drawer, drawerStore } from '@skeletonlabs/skeleton';
  import type { DrawerSettings } from '@skeletonlabs/skeleton';

const logout = () => {
  authToken.logout()
};

const goProfile = () => {
  goto('profile/' + userInfo.id)
};

const openDrawer = () => {
  drawerStore.open();
};

const closeDrawer = () => {
  drawerStore.close();
};

</script>

<!-- UserLayout.svelte -->
<Drawer
  width="w-64"
  position="right"
>

<dl class="list-dl">
	<div>
    <Avatar src={userInfo.avatar} on:click={goProfile} width="w-7" rounded="rounded-full" />
		<span class="flex-auto">
			<dt>jinwoole</dt>
			<dd>접속중</dd>
		</span>
	</div>
  <div>
    <Avatar src={userInfo.avatar} on:click={goProfile} width="w-7" rounded="rounded-full" />
		<span class="flex-auto">
			<dt>sesim</dt>
			<dd>자는중</dd>
		</span>
	</div>
  <div>
    <Avatar src={userInfo.avatar} on:click={goProfile} width="w-7" rounded="rounded-full" />
		<span class="flex-auto">
			<dt>sesim</dt>
			<dd>자는중</dd>
		</span>
	</div>  <div>
    <Avatar src={userInfo.avatar} on:click={goProfile} width="w-7" rounded="rounded-full" />
		<span class="flex-auto">
			<dt>sesim</dt>
			<dd>자는중</dd>
		</span>
	</div>  <div>
    <Avatar src={userInfo.avatar} on:click={goProfile} width="w-7" rounded="rounded-full" />
		<span class="flex-auto">
			<dt>sesim</dt>
			<dd>자는중</dd>
		</span>
	</div>  <div>
    <Avatar src={userInfo.avatar} on:click={goProfile} width="w-7" rounded="rounded-full" />
		<span class="flex-auto">
			<dt>sesim</dt>
			<dd>자는중</dd>
		</span>
	</div>  <div>
    <Avatar src={userInfo.avatar} on:click={goProfile} width="w-7" rounded="rounded-full" />
		<span class="flex-auto">
			<dt>sesim</dt>
			<dd>자는중</dd>
		</span>
	</div>  <div>
    <Avatar src={userInfo.avatar} on:click={goProfile} width="w-7" rounded="rounded-full" />
		<span class="flex-auto">
			<dt>sesim</dt>
			<dd>자는중</dd>
		</span>
	</div>  <div>
    <Avatar src={userInfo.avatar} on:click={goProfile} width="w-7" rounded="rounded-full" />
		<span class="flex-auto">
			<dt>sesim</dt>
			<dd>자는중</dd>
		</span>
	</div>  <div>
    <Avatar src={userInfo.avatar} on:click={goProfile} width="w-7" rounded="rounded-full" />
		<span class="flex-auto">
			<dt>sesim</dt>
			<dd>자는중</dd>
		</span>
	</div>  <div>
    <Avatar src={userInfo.avatar} on:click={goProfile} width="w-7" rounded="rounded-full" />
		<span class="flex-auto">
			<dt>sesim</dt>
			<dd>자는중</dd>
		</span>
	</div>  <div>
    <Avatar src={userInfo.avatar} on:click={goProfile} width="w-7" rounded="rounded-full" />
		<span class="flex-auto">
			<dt>sesim</dt>
			<dd>자는중</dd>
		</span>
	</div>
</dl>


</Drawer>

<AppBar slot="headline" class="h-16">

  <div slot="lead" class="flex items-center space-x-6">
    <button on:click={logout}>기록 밖으로</button>
    <LightSwitch />
  </div>
  <p class="text-center" >Jim vs Transcendence</p>
  <div slot="trail" class="flex items-center space-x-6">
    <Avatar src={userInfo.avatar} on:click={goProfile} width="w-8" rounded="rounded-full" />
    <button type="button" class="btn btn-sm variant-filled" on:click={openDrawer}>동무 목록</button>

  </div>
</AppBar>