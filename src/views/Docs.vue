<template>
  <div class="doc">
    <h1>Documentation</h1>
    <hr>
    <div v-for="(value, key) in docs" class="scope">
      <h2>{{ key }}</h2>
      <p>
        {{ desc[key] }}
      </p>
      <Block v-for="(item) in value">
        <h3>
          {{ item.name }}(
          <div class="params">
            <span v-for="(param, index) in item.params" class="param">
              {{ param }}
              <div class="separator" v-if="index !== item.params.length - 1">
                {{ sep }}
              </div>
              <div class="tip">
                {{ tips[param] }}
              </div>
            </span>
          </div>
          )
        </h3>
        <p>{{ item.description }}</p>
      </Block>
      <pre>
        <span class="bar">
          <button class="copy">
            Copy
          </button>
        </span>
        <code class="language-js" ref="code">
          {{ code[key] }}
        </code>
      </pre>
    </div>
  </div>
</template>

<script>
  import Block from '../components/Block.vue'
  import Prism from '../prism.js'
  
  export default {
    mounted() {
      Prism.highlightAll()
    },
    data() {
      return {
        docs: {
          'array operations': [
            {
              name: 'unite',
              params: ['...lists'],
              description: 'This operation unites multiple lists together and returns one list with all the items.',
              type: '',
              example: '',
            },
            {
              name: 'subtract',
              params: ['target', '...lists'],
              description: 'This operation subtrats multiple lists from one list.',
              type: '',
              example: '',
            },
            {
              name: 'intersect',
              params: ['...lists'],
              description: 'This operation returns the common elements from multiple lists. It works like an AND gateway!',
              example: '',
            },
            {
              name: 'exclude',
              params: ['...lists'],
              description: 'This operation returns the symettric difference of multiple lists. It works like an XOR gateway!',
              type: '',
              example: '',
            },
          ],
          'array purification': [
            {
              name: 'filter',
              params: ['list', 'rule'],
              description: 'This returns the elements in the list that matched the rule and ignores the elements that did not match the rule.',
              type: '',
              example: '',
            },
            {
              name: 'partition',
              params: ['list', 'rule'],
              description: 'This returns a list with the elements that matched the rule in the 0th index and elements that did not match the rule in the 1st index.',
              type: '',
              example: '',
            },
          ],
          'objects': [
            {
              name: 'matches',
              params: ['rule'],
              description: 'This can be used to check whether an object matches all the key and value pairs of the rule object. This is usually used as the callback function for filter and partition!',
              type: '',
              example: '',
            },
            {
              name: 'matchesProperty',
              params: ['key', 'value'],
              description: 'This can be used to check whether an object matches one of the key and value pairs of the rule list. This is usually used as the callback function for filter and partition!',
              type: '',
              example: '',
            },
            {
              name: 'property',
              params: ['key'],
              description: 'This returns the property',
              type: '',
              example: '',
            },
            {
              name: 'must',
              params: ['rule'],
              description: 'This function evaluates a string or array of string expressions. This is an improvement of the matches function, but it uses eval to convert strings to boolean expressions.',
              type: '',
              example: '',
            },
          ],
        },
        sep: ',',
        tips: {
          '...lists': 'Accepts multiple arrays as input',
          'list': 'Accepts an array as input',
          'target': 'The target of the operation',
          'fun': 'Accepts a callback function',
          'rule': 'The key & value requirements',
          'key': 'The attribute of an object',
          'value': 'The object key\'s value',
        },
        desc: {
          'array operations': 'These include functions that perform boolean-like or mathematical operations on multiple lists. The unite function works like addition, while the subtract function works like subtraction. The intersect function works like the AND operator while the exclude function works like the XOR operator.',
          'array purification': 'These include functions that remove items, usually objects, from an array based on a rule.',
          'objects': 'These include functions iterate through the properties of objects. Most of these return a callback function. You would most likely use them as rules.',
        },
        code: {
          'array purification': `
const users = [
  {
    name: 'foo',
    age: 8,
    deleted: false,
  },
  {
    name: 'bar',
    age: 18,
    deleted: false,
  },
  {
    name: 'baz',
    age: 13,
    deleted: true,
  },
  {
    name: 'qux',
    age: 13,
    deleted: false,
  },
]
const one = ['foo', 'bar', 'baz']
const two = ['bar', 'baz']
const three = ['baz', 'qux']

// Unites multiple arrays
result = _.unite(one, two, three)
console.log(result)

// Subtracts an array from another
result = _.subtract(one, two, three)
console.log(result)

// Returns the common elements in arrays
result = _.intersect(one, two, three)
console.log(result)

// Gets the symmetric difference
result = _.exclude(one, two, three)
console.log(result)`,
        },
      }
    },
    components: {
      'Block': Block,
    },
  }
</script>

<style scoped>
  .doc {
    display: block;
    max-width: calc(100vw - 5vw);
    min-width: calc(100vw - 20vw);
    background: var(--dark);
    width: 100%;
    height: 100vh;
    box-sizing: border-box;
    padding: 5vw;
  }

  section {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  h1 {
    color: var(--yellow);
  }

  h2 {
    color: var(--amber);
  }

  h3 {
    color: var(--orange);
    text-transform: none;
  }

  p {
    width: 50vw;
  }

  .params {
    display: flex;
  }

  .scope {
    display: block;
  }

  .param, .separator {
    display: flex;
    position: relative;
    font-size: 2vw;
    cursor: pointer;
  }

  .param:hover {
    color: var(--amber);
  }

  .param:hover .tip {
    display: flex;
    opacity: 1;
    top: 2vw;
    width: 10vw;
    height: 3vw;
    padding: 1vw;
    font-size: 1vw;
  }

  .separator {
    display: flex;
    margin: 0 0.5vw 0 0;
  }

  .tip {
    display: flex;
    opacity: 0;
    position: absolute;
    top: 0vw;
    left: -1vw;
    width: 100%;
    height: calc(100% - 2vw);
    background: var(--blue-light);
    border-radius: 0.5vw;
    padding: 0;
    font-size: 0vw;
    align-items: center;
    z-index: 100;
  }

  .bar {
    display: flex;
    top: 0;
    left: 0;
    width: 100%;
    height: 3vw;
    position: absolute;
    background: var(--blue-dark);
    border-radius: 0.5vw 0.5vw 0 0;
  }

  .copy {
    border-radius: 0.5vw 0 0 0;
  }

  pre {
    position: relative;
  }
</style>