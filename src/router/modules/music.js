export default {
  name: "Music",
  path: "/music",
  component: () => import("@/views/music/Music.vue"),
  redirect: "/music/hall",
  children: [
    {
      path: "hall",
      component: () => import("@/components/hall/Hall.vue"),
      name: "hall",
    },
  ],
}
