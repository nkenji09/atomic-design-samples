import { expect } from "@storybook/jest";
import { within, fireEvent } from "@storybook/testing-library";
import type { Story, Meta } from "@storybook/vue3";
import TestComponent from "@atoms/buttons/normal-button/normal-button.vue";

const markdown = `
## 概要

通常のボタン  

    emits = {
      (e: 'click'): void
    }

`;

// コンポーネントのメタデータを記述
export default {
  title: "Atoms/buttons/normal-button",
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
  argTypes: {
    click: { action: "click" },
  },
} as Meta;

let emitCounter: number;
const Template: Story = (args) => ({
  components: { TestComponent },
  template: `
    <div data-testid="test-component-wrapper">
      <TestComponent @click="onClick">CLICK ME</TestComponent>
    </div>
  `,
  props: {},
  setup() {
    emitCounter = 0;
    return {
      args,
      onClick() {
        // Emitが実行されるとカウントアップ
        emitCounter++;
      },
    };
  },
  methods: {},
});

export const Basic = Template.bind({});
Basic.args = {};
Basic.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const cmp = await canvas.getByText("CLICK ME");
  await expect(cmp).toBeInTheDocument();

  // TEST: カウントアップされて 1 になるはず
  await fireEvent.click(cmp);
  await expect(emitCounter).toBe(1);
};
