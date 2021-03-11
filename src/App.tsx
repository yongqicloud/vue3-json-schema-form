import { defineComponent, reactive, ref } from 'vue';

export default defineComponent({
  setup() {
    const state = reactive({
      age: 1
    });
    const nameRef = ref(222);
    setInterval(() => {
      state.age++;
    }, 1000);
    return () => {
      return (
        <div>
          vue + tsx {state.age}---{nameRef.value}
        </div>
      );
    };
  }
});
