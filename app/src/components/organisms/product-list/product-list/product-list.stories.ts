import { expect } from "@storybook/jest";
import { within } from "@storybook/testing-library";
import type { Story, Meta } from "@storybook/vue3";
import TestComponent from "./product-list.vue";
import { GetProductsResponse } from "./product-list.logic";
import Logic from "./logics/on-product-list";

const markdown = `
商品一覧
`;

// コンポーネントのメタデータを記述
export default {
  title: "Organisms/product-list/product-list",
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

class TestLogic extends Logic {
  async loadProducts(): Promise<GetProductsResponse> {
    const result = await super.loadProducts();
    // TEST: addCartの成功可否
    await expect(result.isSuccess).toBe(true);
    await expect(super.getProductsState().length).toBe(3);
    return result;
  }
}

export const Basic = Template.bind({});
Basic.args = {
  logic: new TestLogic(),
};
Basic.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const cmp = await canvas.getByRole("itemlist");
  await expect(cmp).toBeInTheDocument();
};
