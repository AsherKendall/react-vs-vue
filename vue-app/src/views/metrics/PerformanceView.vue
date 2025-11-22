<script setup>
import GenericPage from '@/components/templates/GenericPage.vue'
import vueRender from '@/assets/VueRender.svg?raw'
import { inject } from 'vue'
const citations = inject('citations')
</script>

<template>
  <main>
    <GenericPage v-once title="Performance">
      <h2 class="blue">Overview</h2>
      <p>
        One of the metrics that both React and Vue are often compared on is performance. Both
        solutions use a virtual DOM solution to more efficiently render changes to the page. This
        generally means faster modification times. This is because the virtual DOM tends to be more
        lightweight and additionally allows batched updates
        {{ citations.getCitationNumbers(['Trends', 'ComparPopWeb', 'VueRendering']) }}.
      </p>
      <p>
        There are multiple studies on performance when it comes to web frameworks/libraries. They
        displayed many different ways of measurement that gave some insight into the strengths of
        each solution when it comes to performance. Overall I found some fairly consistent results
        when it came to strengths, but more inconsistent results on specific metrics, which I will
        get into further in my analysis.
      </p>

      <h2>Rendering</h2>
      <p>
        Most of these results seem to be determined by how React and Vue handle the virtual DOM
        differently. The virtual DOM is a tree of nodes that represent the components in the DOM.
        This means that modify the virtual DOM before changing the actual DOM
        {{ citations.getCitationNumbers(['RendPerf', 'VueRendering']) }}. These differences affect
        not only how the solutions perform but also how their code is structured as well.
      </p>
      <h3 class="blue">How React Handles the Virtual DOM</h3>
      <p>
        React tends to have a more simplistic approach when it comes to handling the virtual DOM.
        Most of the time, React handles renders/changes by walking through the subtree of the
        component, which starts the render loop. It is able to do this because in React, components
        are only able to directly share their state with their descendants
        {{ citations.getCitationNumber('RendPerf') }}. This on its own can increase performance
        since we don't have to walk through the whole tree if we don't initialize the render loop
        from the root node.
      </p>
      <p>
        This simplistic approach gives fairly large benefits but still tends to struggle with
        certain things. For example, React tends to do badly when it comes to re-renders that
        include a large amount of sub-elements. This is especially true of static components that
        will never need to be re-rendered and create more unnecessary re-renders
        {{ citations.getCitationNumber('RendPerf') }}.
      </p>
      <p>
        While this method has some pretty significant downsides, React does provide some solutions
        that can help developers reduce their impact. For example, we can use the memo function to
        memoize static or non-changing components. This should be done unless the component is very
        small and/or simple, where memo costs more than a re-render
        {{ citations.getCitationNumber('reactMemo') }}.
      </p>
      <highlightjs
        language="javascript"
        code="import { memo } from 'react';

const SomeComponent = memo(function SomeComponent(props) {
  // Component Code
});"
      />
      <p>
        This can be used in addition to useContext to skip children components in between the parent
        the desired component to be re-rendered. I discuss this hook more in the
        <RouterLink to="/basic/state">state section</RouterLink>. Here is an example from the react
        documentation {{ citations.getCitationNumber('reactUseContext') }}.
      </p>
      <highlightjs
        language="javascript"
        code="import { useCallback, useMemo } from 'react';

function MyApp() {
  const [currentUser, setCurrentUser] = useState(null);

  const login = useCallback((response) => {
    storeCredentials(response.credentials);
    setCurrentUser(response.user);
  }, []);

  const contextValue = useMemo(() => ({
    currentUser,
    login
  }), [currentUser, login]);

  return (
    <AuthContext value={contextValue}>
      <Page />
    </AuthContext>
  );
}"
      />
      <p>
        The last thing that should be mentioned is the new React Compiler that claims to
        automatically help reduce component re-renders. The React Compiler is a new build-time tool
        that aims to automatically optimize React code. While this has some promise for the future
        of React, it seems that it still needs some work. While there are not any scholarly sources
        that yet assess this new tool, there are a few industry articles that give us some insight.
        The compiler does seem to catch quite a few cases; it doesn't catch all
        {{ citations.getCitationNumber('iReactCompiler') }}. It also important to keep in mind that
        overtime this tool may become much better as it get more updates.
      </p>
      <p>
        This is to be expected, especially when talking about a new tool, but there are still many
        cases where this tool is useful in production. This is something that needs to be evaluated
        on a case-by-case basis, and in certain cases results in worse performance. For example,
        according to a performance testing framework, we found that using the React Compiler with
        hooks for replacing all rows gave us a weighted geometric mean of 35.6 ms. However, using
        just React hooks, we got a better score of 35.1 ms, which demonstrates not all situations
        are equal in this regard. We can see that the React compiler with hooks still overall scored
        better than React hooks, and as such, it may be a good idea to assess your specific case
        first {{ citations.getCitationNumber('krausestInteractiveResults') }}.
      </p>
      <h3 class="green">How Vue Handles the Virtual DOM</h3>
      <p>
        While Vue and React are similar in that they both employ optimizations to the virtual DOM
        that increase performance, Vue has a very different approach in this regard. Vue uses a
        different method called compiler-informed virtual DOM, which utilizes many optimizations
        that improve tree traversal during compilation. In React, the virtual DOM implementation is
        purely runtime, whereas Vue statically analyzes the template, allowing runtime to take
        shortcuts where possible {{ citations.getCitationNumber('VueRendering') }}. This approach is
        shown in the render pipeline adapted from the Vue documentation.
      </p>

      <div
        style="display: flex; justify-content: center; align-items: center"
        v-html="vueRender"
      ></div>

      <p>
        One of the biggest places that we see some of these differences take effect is how Vue deals
        with updates to the DOM. Vue has to determine which components are affected before changing
        the virtual DOM. This is done using what is known as a limited reactivity system. It does
        this in Vue 3 by tracking dependencies for reactive objects using JavaScript Proxies and
        getters/setters for refs
        {{ citations.getCitationNumbers(['RendPerf', 'VueRendering', 'vueReactivity']) }}.
      </p>
    </GenericPage>
  </main>
</template>
