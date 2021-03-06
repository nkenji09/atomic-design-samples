import { expect } from "@storybook/jest";
import { within, fireEvent } from "@storybook/testing-library";
import type { Story, Meta } from "@storybook/vue3";
import { action } from "@storybook/addon-actions";
import TestComponent from "@atoms/texts/linkable-text/linkable-text.vue";

const markdown = `
任意でリンク可能なテキスト  
`;

// コンポーネントのメタデータを記述
export default {
  title: "Atoms/texts/linkable-text",
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

let emitCounter: number;
const Template: Story = (args, { argTypes }) => {
  /**
   * Eventは onXxxx として指定する
   * ( Actions にログを表示できる )
   */
  const actionsData = {
    onClick: action("click"),
  };

  return {
    props: Object.keys(argTypes),
    components: { TestComponent },
    setup: () => {
      emitCounter = 0;
      return { args: { ...args, ...actionsData } };
    },
    template: `
      <TestComponent 
        @click="onClick"
        v-bind="args"
      >SLOTS DUMMY</TestComponent>`,
    methods: {
      onClick: () => {
        ++emitCounter;
      },
    },
  };
};

export const Basic = Template.bind({});
Basic.args = {
  url: "https://google.com",
};
Basic.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const cmp = await canvas.getByText("SLOTS DUMMY");
  await expect(cmp).toBeInTheDocument();

  // TEST: カウントアップされて 1 になるはず
  await fireEvent.click(cmp);
  await expect(emitCounter).toBe(1);
};
