import { expect } from "@storybook/jest";
import { within } from "@storybook/testing-library";
import type { Story, Meta } from "@storybook/vue3";
import TestComponent from "./list-image.vue";

const markdown = `
商品一覧の画像  

## 使用方法

@/以降のパスを指定します

    <ListImage path="assets/logo.png" alt="説明" />
`;

// コンポーネントのメタデータを記述
export default {
  title: "Atoms/images/list-image",
  component: TestComponent,
  parameters: {
    layout: "centered",
    docs: {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      extractComponentDescription: (_component: any, { notes }: any) => {
        if (notes) {
          return notes.markdown;
        }
        return null;
      },
    },
    notes: { markdown },
  },
} as Meta;

const Template: Story = (args, { argTypes }) => {
  /**
   * Eventは onXxxx として指定する
   * ( Actions にログを表示できる )
   */
  const actionsData = {};

  return {
    props: Object.keys(argTypes),
    components: { TestComponent },
    setup: () => {
      return { args: { ...args, ...actionsData } };
    },
    template: `
      <TestComponent 
        v-bind="args"
      >SLOTS DUMMY</TestComponent>`,
    methods: {},
  };
};

export const Basic = Template.bind({});
Basic.args = {
  path: "assets/logo.png",
  alt: "list-image",
};
Basic.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const cmp = await canvas.getByAltText("list-image");
  await expect(cmp).toBeInTheDocument();
};
