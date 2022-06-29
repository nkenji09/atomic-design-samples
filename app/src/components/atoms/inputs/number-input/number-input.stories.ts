import { ref } from "vue";
import { expect } from "@storybook/jest";
import { within, fireEvent } from "@storybook/testing-library";
import type { Story, Meta } from "@storybook/vue3";
import { action } from "@storybook/addon-actions";
import TestComponent from "./number-input.vue";

const markdown = `
数値情報の入力欄  
`;

// コンポーネントのメタデータを記述
export default {
  title: "Atoms/inputs/number-input",
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

let emitCounter = 0;
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
      emitCounter = 0;
      return { args: { ...args, ...actionsData } };
    },
    template: `
      {{ emitCounter }}
      <TestComponent 
        v-model="emitCounter"
        @update:modelValue="onUpdate"
        v-bind="args"
      >SLOTS DUMMY</TestComponent>`,
    methods: {
      onUpdate: () => {
        ++emitCounter;
      },
    },
  };
};

export const Basic = Template.bind({});
Basic.args = {};
Basic.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const cmp = await canvas.getByRole("number");
  await expect(cmp).toBeInTheDocument();

  // TEST: カウントアップされて 1 になるはず
  await fireEvent.input(cmp, "5");
  await expect(emitCounter).toBe(1);
};
