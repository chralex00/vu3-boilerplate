import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createVuestic, createIconsConfig } from "vuestic-ui";

import "bootstrap/dist/css/bootstrap.css";
import "vuestic-ui/css";
import "material-design-icons-iconfont/dist/material-design-icons.min.css";

const app = createApp(App);

app.use(router);
app.use(
    createVuestic({
        config: {
            icons: createIconsConfig({
                aliases: [],
                fonts: [{
                    name: 'mdi-{icon}',
                    resolve: ({ icon }): any => ({
                        class: "material-icons",
                        content: icon,
                        attrs: "",
                        tag: "span",
                    })
                }]
            }),
            colors: {
                variables: {
                    primary: "#5D81F3",
                    secondary: "#4D4CAC",
                    success: "#8aff80",
                    info: "#80fff5",
                    danger: "#FF808A",
                    warning: "#ffb680",
                    gray: "#babfc2",
                    dark: "#1a242f"
                },
            },
        },
    })
);

app.mount('#app');
