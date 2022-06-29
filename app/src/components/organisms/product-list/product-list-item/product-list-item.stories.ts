import { expect } from "@storybook/jest";
import { within } from "@storybook/testing-library";
import type { Story, Meta } from "@storybook/vue3";
import TestComponent from "./product-list-item.vue";
import { Product } from "@/values/product";

const markdown = `
商品一覧の1つのアイテム  
`;

// コンポーネントのメタデータを記述
export default {
  title: "Organisms/product-list/product-list-item",
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
  product: new Product({ id: "1", name: "dummy", price: 1000 }),
};
Basic.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const cmp = await canvas.getByRole("listitem");
  await expect(cmp).toBeInTheDocument();
};
