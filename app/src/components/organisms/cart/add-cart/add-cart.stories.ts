import { expect } from "@storybook/jest";
import { within, fireEvent } from "@storybook/testing-library";
import type { Story, Meta } from "@storybook/vue3";
import TestComponent from "./add-cart.vue";
import { AddCartResponse } from "./add-cart.logic";
import Logic from "./logics/on-product-list";
import { Product } from "@/values/product";

const markdown = `
任意の数量をカートに追加するボタン  
`;

// コンポーネントのメタデータを記述
export default {
  title: "Organisms/cart/add-cart",
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
  async addCart(productId: string, quantity: number): Promise<AddCartResponse> {
    const result = await super.addCart(productId, quantity);
    // TEST: addCartの成功可否
    await expect(result.isSuccess).toBe(true);
    return result;
  }
}

export const Basic = Template.bind({});
Basic.args = {
  product: new Product({ id: "1", name: "dummy", price: 1000 }),
  logic: new TestLogic(),
};
Basic.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const cmp = await canvas.getByRole("button");
  await expect(cmp).toBeInTheDocument();
  await fireEvent.click(cmp);
};
