import { expect } from "@storybook/jest";
import { within } from "@storybook/testing-library";
import type { Story, Meta } from "@storybook/vue3";
import TestComponent from "@atoms/texts/price-text/price-text.vue";

const markdown = `
金額表示用テキスト  
`;

// コンポーネントのメタデータを記述
export default {
  title: "Atoms/texts/price-text",
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

// let emitCounter: number;
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
      // emitCounter = 0;
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
  price: 1000,
};
Basic.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const cmp = await canvas.getByText("￥1,000");
  await expect(cmp).toBeInTheDocument();
};
