<script>
import menus from './config';

export default {
  name: 'MainMenu',

  data() {
    return {
      menus,
    };
  },

  render() {
    const {
      menus: thisMenus,
      $route: { path },
    } = this;
    if (!thisMenus || !thisMenus.length) return '';

    const thisKey = (path || '').slice(1);

    const renderItems = (list) =>
      list.map((item) => {
        const { root, key, title, icon, children } = item;

        if (children && children.length) {
          return (
            <a-sub-menu key={key}>
              <span slot="title">
                {root && icon && <a-icon type={icon} />}
                <span>{title}</span>
              </span>
              {renderItems(children)}
            </a-sub-menu>
          );
        }

        return (
          <a-menu-item key={key}>
            <router-link to={`/${key}`}>
              {root && icon && <a-icon type={icon} />}
              <span>{title}</span>
            </router-link>
          </a-menu-item>
        );
      });

    return (
      <a-menu theme="dark" mode="inline" selectedKeys={[thisKey]}>
        {renderItems(thisMenus)}
      </a-menu>
    );
  },

  methods: {},

  mounted() {},
};
</script>
