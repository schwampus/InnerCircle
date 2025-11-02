`Ctrl + d` - to exit server
`ssh-copy-id` - to add your own ssh

`sudo reboot`

`df -h` - human readable
`free -h` - free memory

ssh azureuser@20.224.173.133


to add public key (for server log in):
`ssh-copy-id azureuser@20.224.173.133`

Start the ssh agent:
`eval "$(ssh-agent -s)"`

check the ssh keys:
`ls -l ~/.ssh/`

generate a new key on the server:
`ssh-keygen -t ed25519 -C "azure-server-github"`

Add it:
`eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_ed25519`

Verify the key:
`ssh-add -l`

get your server's public key and add it on github:
`cat ~/.ssh/id_ed25519.pub`

test the connection:
`ssh -T git@github.com`