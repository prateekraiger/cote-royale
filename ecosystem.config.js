module.exports = {
  apps: [{
    name: 'cote-royale-dev',
    script: 'npm',
    args: 'run dev',
    cwd: '/home/user/webapp',
    env: {
      NODE_ENV: 'development',
      PORT: 3000
    },
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    exec_mode: 'fork'
  }]
}
