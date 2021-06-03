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
    return <a-button type="primary">{a}</a-button>;
  },

  methods: {},

  mounted() {},
};
</script>

<style lang="scss" module></style>
