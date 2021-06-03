<script>
import { a } from '../assets/test.json';

export default {
  name: 'Test',

  data() {
    return {
      a,
    };
  },

  render() {
    return <h1>{a}</h1>;
  },

  methods: {},

  mounted() {},
};
</script>

<style lang="scss" module></style>
