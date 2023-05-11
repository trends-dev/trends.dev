# 认识团队

<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: '/avatars/wkx160312746.png',
    name: 'Fenta',
    title: 'A fullstack developer',
    desc:'Creator @trends.wiki',
    links: [
      { icon: 'github', link: 'https://github.com/wkx160312746' },
      { icon: 'twitter', link: 'https://twitter.com/fenta9527' }
    ]
  },
  {
    avatar: '/avatars/elonehoo.png',
    name: 'Elone Hoo',
    title: 'A fanatical open sourceror',
    desc: `Vite's fanatical follower`,
    links: [
      { icon: 'github', link: 'https://github.com/elonehoo' },
      { icon: 'twitter', link: 'https://twitter.com/elonehoo' },
      { icon: 'discord', link: 'https://discord.gg/G3S76kG8' },
      { icon: 'mastodon', link: 'https://elk.zone/mstdn.social/@elonehoo' },
      { icon: 'instagram', link: 'https://www.instagram.com/elonehoo7' }
    ]
  },
]
</script>

<VPTeamMembers size="small" :members="members" />
