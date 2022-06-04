<template>
  <Nav></Nav>
  <router-view></router-view>
</template>

<script>
  import Nav from "./components/Nav.vue"
  import SocketIO from "./services/socketio.service.js"

  export default {
    created() {
      SocketIO.connect();
    },
    beforeUnmount() {
      SocketIO.disconnect();
    },
    components: {
      'Nav': Nav,
    }
  }
</script>

<style>
  @font-face {
    font-family: 'Leon';
    src: url('./leon.otf');
  }

  @font-face {
    font-family: 'Mono';
    src: url('./mono.ttf');
  }

  :root {
    --blurple: #5865F2;
    --dark: #36393F;
    --darker: #2F3136;
    --darkest: #202225;
    --green-light: #2ECC71;
    --green-dark: #1F8B4C;
    --blue-light: #1A73E8;
    --blue-dark: #185ABC;
    --purple-light: #9B59B6;
    --purple-dark: #71368A;
    --pink-light: #E91E63;
    --pink-dark: #AD1457;
    --gold-light: #F1C40F;
    --gold-dark: #C27C0E;
    --orange: #F57C00;
    --amber: #FFA000;
    --yellow: #FFCA28;
    --red-light: #E74C3C;
    --red-dark: #992D22;
  }

  * {
    color: white;
    font-family: 'Leon';
    font-size: 1vw;
    transition: 0.25s;
  }

  *::selection {
    background: var(--amber);
    color: white;
  }

  style {
    display: none;
  }

  script {
    display: none;
  }

  title {
    display: none;
  }

  meta {
    display: none;
  }
  
  body {
    width: 100vw;
    margin: 0;
    padding: 0;
    height: 100vh;
    font-size: 1vw;
    background: var(--darkest);
    color: white;
  }

  #app {
    width: 100vw;
    height: 100%;
    overflow: hidden;
    display: flex;
  }

  .faded {
    opacity: 0;
    background: var(--darker);
  }

  ul {
    display: flex;
    margin: 0;
    padding: 0;
    list-style-type: none;
  }

  li {
    display: flex;
    margin: 0;
    padding: 0;
  }

  i {
    display: flex;
    width: 1vw;
  }

  i svg {
    display: flex;
    height: 100%;
  }

  a {
    display: flex;
    font-size: inherit;
    font-weight: 400;
    text-decoration: none;
    color: var(--amber);
  }

  a:hover {
    color: var(--yellow);
  }

  p a {
    display: inline-block;
  }

  h1, h2, h3 {
    display: flex;
    margin: 0.5vw 0 0 0;
    font-weight: 400;
    transition: 0.25s;
    text-transform: capitalize;
  }

  h1 {
    font-size: 4vw;
  }

  h2 {
    font-size: 3vw;
  }
  
  h3 {
    font-size: 2vw;
  }

  p {
    font-size: 1.25vw;
    display: block;
    margin: 0.5vw 0 1vw 0;
    transition: 0.25s;
  }

  hr {
    height: 0.25vw;
    background: white;
    border: none;
    margin: 0.5vw 0;
  }

  .page, .doc {
    display: flex;
    padding: 5vw;
    box-sizing: border-box;
    width: 100%;
    max-width: calc(100vw - 5vw);
    min-width: calc(100vw - 20vw);
    flex-direction: column;
    background: var(--dark);
    overflow-y: scroll;
    align-items: flex-start;
    scrollbar-width: 0;
  }

  .page::-webkit-scrollbar, .doc::-webkit-scrollbar {
    display: none;
  }

  button {
    display: flex;
    align-items: center;
    border: none;
    background: var(--blue-dark);
    font-size: 1vw;
    padding: 1vw 2vw;
    cursor: pointer;
    border-radius: 0.5vw;
  }

  button:hover {
    background: var(--blue-light);
  }

  .desc {
    display: flex;
    width: 30vw;
  }

  pre {
    border-radius: 0.5vw;
    background: var(--darker);
    margin: 0;
    padding: 1vw 1vw 0;
    display: block;
    white-space: normal;
  }

  code {
    color: #b0d0ff;
    font-size: 1vw;
    font-family: 'Mono', monospace;
  }

  span.token {
    font-family: 'Mono', monospace;
    margin: 0;
  }

  code[class*=language-] {
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    word-wrap: normal;
    line-height: 1.5;
    -moz-tab-size:4;
    -o-tab-size:4;
    tab-size:4;
    -webkit-hyphens:none;
    -moz-hyphens:none;
    -ms-hyphens:none;
    hyphens:none
  }
  .token.block-comment,.token.cdata,.token.comment,.token.doctype,.token.prolog{
      color: #ffffff80
  }
  .token.punctuation{
      color: white;
  }
  .token.attr-name,.token.deleted,.token.namespace,.token.tag{
      color:#e2777a
  }
  .token.function{
      color: var(--yellow);
  }
  .token.boolean,.token.number{
      color: var(--red-light);
  }
  .token.class-name,.token.constant,.token.property,.token.symbol{
      color: #b0d0ff;
  }
  .token.atrule,.token.builtin,.token.important,.token.keyword,.token.selector{
      color: var(--blue-light);
  }
  .token.attr-value,.token.char,.token.regex,.token.string,.token.variable{
      color: var(--amber)
  }
  .token.entity,.token.operator,.token.url{
      color: white;
  }
  .token.bold,.token.important{
      font-weight:700
  }
  .token.italic{
      font-style:italic
  }
  .token.entity{
      cursor: help;
  }
  .token.inserted{
      color: green;
  }
</style>