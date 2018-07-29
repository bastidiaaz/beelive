import t from 'tcomb-form-native';

const DEFAULT_STYLES = {
    PRIMARY_COLOR: '#00BCD4',
    PRIMARY_COLOR_LIGHT: '#26C6DA',
    PRIMARY_COLOR_LIGHTER: '#4DD0E1',
    PRIMARY_COLOR_LIGHTEST: '#80DEEA',
    PRIMARY_COLOR_DARK: '#00ACC1',
    PRIMARY_COLOR_DARKER: '#0097A7',
    PRIMARY_COLOR_DARKEST: '#00838F',
    SECONDARY_COLOR: '#FF9800',
    PRIMARY_TEXT_COLOR: '#212121',
    SECONDARY_TEXT_COLOR: '#757575',
    DIVIDER_COLOR: '#BDBDBD',
    PRIMARY_BORDER_COLOR: '#5D4037',
    SECONDARY_BODER_COLOR: '#FFCCBC',
    TEXT_COLOR_INVERSE: '#FFF',

    //Labels
    LABEL_NORMAL_COLOR: '#00838F',
    LABEL_FONT_SIZE: 17,
    LABEL_FONT_WEIGHT: 'bold',
    LABEL_MARGIN_BOTTOM: 5,

    //Titles
    TITLE_BIG_FONT_SIZE: 24,

    //Containers
    SCREEN_CONTAINER_PADDING: 20,
    SCREEN_SECCION_CONTAINER_PADDING: 30,
    LIST_CONTAINER_PADDING: 0,

};

t.form.Form.stylesheet.controlLabel.normal.color = DEFAULT_STYLES.LABEL_NORMAL_COLOR;
t.form.Form.stylesheet.controlLabel.normal.fontSize = DEFAULT_STYLES.LABEL_FONT_SIZE;
t.form.Form.stylesheet.controlLabel.normal.fontWeight = DEFAULT_STYLES.LABEL_FONT_WEIGHT;
t.form.Form.stylesheet.controlLabel.normal.marginBottom = DEFAULT_STYLES.LABEL_MARGIN_BOTTOM;
// t.form.Form.stylesheet.controlLabel.error.color = DEFAULT_STYLES.LABEL_NORMAL_COLOR;
t.form.Form.stylesheet.controlLabel.error.fontSize = DEFAULT_STYLES.LABEL_FONT_SIZE;
t.form.Form.stylesheet.controlLabel.error.fontWeight = DEFAULT_STYLES.LABEL_FONT_WEIGHT;
t.form.Form.stylesheet.controlLabel.error.marginBottom = DEFAULT_STYLES.LABEL_MARGIN_BOTTOM;

export default DEFAULT_STYLES;
