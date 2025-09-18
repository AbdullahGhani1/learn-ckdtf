This is the CDKTF project

find an automated solution to handle repetitive project setup tasks efficiently

### Discover CDKTF

Allows you to define Terraform resources using familar programing Languages like Typescript, Python e.t.c

Combines the flexibility of coding with thew power of Terraform

To use CDKTF to automate project setups

To use typescript as Author is familar with TypeScript

## Setup

- install Node.js

```sh
brew install node@20
node -v
nppm -v
```

- install Terraform CLI

```sh

brew tap hashicorp/tap
brew install hashicorp/tap/terraform
brew update
npm install -g cdktf-cli
cdktf --version
```

## CDKTF Project Setup

install on an empty folder

```sh
cdktf init --template=typescript
```

```sh

? Do you want to continue with Terraform Cloud remote state management? no
? Project Name cdktf-project-builder
? Project Description A simple getting started project cdktf.
? Do you want to start from an existing Terraform project? no
? Do you want to send crash reports to the CDKTF team? Refer to
https://developer.hashicorp.com/terraform/cdktf/create-and-deploy/configuration
-file#enable-crash-reporting-for-the-cli for more information no
Note: You can always add providers using 'cdktf provider add' later on
? What providers do you want to use?
```
