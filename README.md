# peachpub

a fully featured Scuttlebutt pub platform!

a standalone, self-hosted version of the infrastructure developed for [PeachCloud](http://peachcloud.org)

## getting started

### one-click

TODO

### manual

first, spin up a new cloud server running the latest [Debian Linux](https://www.debian.org/)!

possible providers are [DigitalOcean](https://www.digitalocean.com/), [OVH](https://www.ovh.com/world/), [Scaleway](https://www.scaleway.com/), [Rackspace](https://www.rackspace.com/), ...

on your new server

```shell
apt update
apt upgrade -y
apt install -y sudo git curl
```

create a `peach` user who will run our systems

```shell
adduser peach sudo
```

then install Docker:

```shell
apt install -y apt-transport-https ca-certificates software-properties-common
wget https://download.docker.com/linux/debian/gpg -O docker-gpg
sudo apt-key add docker-gpg
echo "deb [arch=amd64] https://download.docker.com/linux/debian $(lsb_release -cs) stable" | sudo tee -a /etc/apt/sources.list.d/docker.list
apt update
apt install -y docker-ce
systemctl start docker
systemctl enable docker
adduser peach docker
```

then as the `peach` user,

install [Node.js](http://nodejs.org/) using [`nvm`](https://github.com/creationix/nvm).

```shell
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash
source ~/.nvm/nvm.sh
```

then install `peachpub`:

```
npm install --global peachpub
```

### your first pub

to initialize your `peachpub` config, run:

```
peachpub init
```

this will create an empty config in `~/.peachpub/config`

to add your first pub to this config, run:

```
peachpub create
```

```
peachpub update
```
