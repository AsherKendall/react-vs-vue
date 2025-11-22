<script setup>
import GenericPage from '@/components/templates/GenericPage.vue'
import vueRender from '@/assets/VueRender.svg?raw'
import { inject } from 'vue'
const citations = inject('citations')
</script>

<template>
  <main>
    <GenericPage title="Performance">
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
      <h3 class="green">How Vue Handles the Virtual DOM</h3>
      <p></p>

      <div v-html="vueRender"></div>
    </GenericPage>
  </main>
</template>
