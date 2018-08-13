
let hd=1,
brandPrimary="#deb888",
brandPrimaryTop="#ff0000";

const theme={
    // 支付宝钱包默认主题
    // https://github.com/ant-design/ant-design-mobile/wiki/设计变量表及命名规范

    // 色彩
    // ---
    // 文字色
    "color-text-base":" #fff",
    "color-text-base-inverse":" #000",
    "color-text-secondary":" #a4a9b0",
    "color-text-placeholder":" #bbb",
    "color-text-disabled":" #bbb",
    "color-text-caption":" #888",
    "color-text-paragraph":" #333",
    "color-link":brandPrimary,

    // 背景色
    "fill-base":" #000",
    "fill-body":" #050509",//050509
    "fill-tap":" #333",
    "fill-disabled":" #333",
    "fill-mask":" rgba(225, 225, 225, 0.4)",
    "color-icon-base":" #ccc",
    "fill-grey":" #f7f7f7",

    // 透明度
    "opacity-disabled":" 0.3",

    // 全局/品牌色
    "brand-primary":brandPrimary,
    "brand-primary-tap":brandPrimaryTop,
    "brand-success":" #6abf47",
    "brand-warning":" #ffc600",
    "brand-error":" #f4333c",
    "brand-important":" #ff5b05",
    "brand-wait":" #108ee9",

    // 边框色
    "border-color-base":" #333",

    // 字体尺寸
    // ---
    "font-size-icontext":`${10 * hd}px`,
    "font-size-caption-sm":`${12 * hd}px`,
    "font-size-base":`${14 * hd}px`,
    "font-size-subhead":`${15 * hd}px`,
    "font-size-caption":`${16 * hd}px`,
    "font-size-heading":`${17 * hd}px`,

    // 圆角
    // ---
    "radius-xs":`${2 * hd}px`,
    "radius-sm":`${3 * hd}px`,
    "radius-md":`${5 * hd}px`,
    "radius-lg":`${7 * hd}px`,
    "radius-circle":" 50%",

    // 边框尺寸
    // ---
    "border-width-sm":" 1PX",
    "border-width-md":" 1PX",
    "border-width-lg":`${2 * hd}px`,

    // 间距
    // ---
    // 水平间距
    "h-spacing-sm":`${5 * hd}px`,
    "h-spacing-md":`${8 * hd}px`,
    "h-spacing-lg":`${15 * hd}px`,

    // 垂直间距
    "v-spacing-xs":`${3 * hd}px`,
    "v-spacing-sm":`${6 * hd}px`,
    "v-spacing-md":`${9 * hd}px`,
    "v-spacing-lg":`${15 * hd}px`,
    "v-spacing-xl":`${42 * hd}px`,

    // 高度
    // ---
    "line-height-base":" 1",
    "line-height-paragraph":" 1.5",

    // 图标尺寸
    // ---
    "icon-size-xxs":`${15 * hd}px`,
    "icon-size-xs":`${18 * hd}px`,
    "icon-size-sm":`${21 * hd}px`,
    "icon-size-md":`${22 * hd}px`,      // 导航条上的图标、grid的图标大"
    "icon-size-lg":`${36 * hd}px`,

    // 动画缓动
    // ---
    "ease-in-out-quint":" cubic-bezier(.86, 0, .07, 1)",

    // 组件变量
    // ---

    "actionsheet-item-height":`${50 * hd}px`,
    "actionsheet-item-font-size":`${18 * hd}px`,

    // button
    "button-height":`${47 * hd}px`,
    "button-font-size":`${18 * hd}px`,

    "button-height-sm":`${30 * hd}px`,
    "button-font-size-sm":`${13 * hd}px`,

    "primary-button-fill":brandPrimary,
    "primary-button-fill-tap":brandPrimaryTop,

    "ghost-button-color":brandPrimary,
    "ghost-button-fill-tap":`fade(${brandPrimary}, 60%)`,

    "warning-button-fill":" #e94f4f",
    "warning-button-fill-tap":" #d24747",

    "link-button-fill-tap":" #ddd",
    "link-button-font-size":`${16 * hd}px`,

    // menu
    "menu-multi-select-btns-height":`${47 * hd}px`,

    // modal
    "modal-font-size-heading":`${18 * hd}px`,
    "modal-button-font-size":`${18 * hd}px`, // 按钮字"
    "modal-button-height":`${50 * hd}px`, // 按钮高"

    // list
    "list-title-height":`${30 * hd}px`,
    "list-item-height-sm":`${35 * hd}px`,
    "list-item-height":`${44 * hd}px`,

    // input
    "input-label-width":`${17 * hd}px`,       // InputItem、TextareaItem 文字长度基础"
    "input-font-size":`${17 * hd}px`,
    "input-color-icon":" #ccc",
    "input-color-icon-tap":brandPrimary,

    // tabs
    "tabs-color":brandPrimary,
    "tabs-height":`${45 * hd}px`,
    "tabs-font-size-heading":`${15 * hd}px`,
    "tabs-ink-bar-height":`${2 * hd}px`,

    // segmented-control
    "segmented-control-color":brandPrimary,
    "segmented-control-height":`${27 * hd}px`,
    "segmented-control-fill-tap":`fade(${brandPrimary}, 0.1)`,

    // tab-bar
    "tab-bar-fill":" #ebeeef",
    "tab-bar-height":`${50 * hd}px`,

    // toast
    "toast-fill":" rgba(58, 58, 58, 0.9)",

    // search-bar
    "search-bar-fill":" #efeff4",
    "search-bar-height":`${44 * hd}px`,
    "search-bar-input-height":`${28 * hd}px`,
    "search-bar-font-size":`${15 * hd}px`,
    "search-color-icon":" #bbb",

    // notice-bar
    "notice-bar-fill":" #fefcec",
    "notice-bar-height":`${36 * hd}px`,
    "notice-bar-color":" #f76a24",

    // switch
    "switch-fill":" #4dd865",
    "switch-fill-android":brandPrimary,

    // tag
    "tag-height":`${25 * hd}px`,
    "tag-height-sm":`${15 * hd}px`,
    "tag-color":brandPrimary,

    // keyboard
    "keyboard-confirm-color":brandPrimary,
    "keyboard-confirm-tap-color":brandPrimaryTop,

    // picker
    "option-height":`${42 * hd}px`,           // picker 标题的高"

    // z-index
    "progress-zindex":" 2000",
    "popover-zindex":" 1999",
    "toast-zindex":" 1999",
    "action-sheet-zindex":" 1000",
    "picker-zindex":" 1000",
    "popup-zindex":" 999",
    "modal-zindex":" 999",
    "tabs-pagination-zindex":" 999",
}

module.exports=theme