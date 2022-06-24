// import { expect } from "@storybook/jest";
import { within, fireEvent } from "@storybook/testing-library";
import type { Story, Meta, StoryContext } from "@storybook/vue3";
import TestComponent from "@atoms/buttons/normal-button/normal-button.vue";

// コンポーネントのメタデータを記述
export default {
  title: "Atoms/buttons/normal-button",
  parameters: {
    layout: "centered",
    docs: {
      extractComponentDescription: (component: any, { notes }: any) => {
        if (notes) {
          return notes.markdown;
        }
        return null;
      },
    },
    notes: { markdown: "#aaaa" },
  },
  argTypes: {
    click: { action: "click" },
  },
} as Meta;

let emitCounter = 0;
const Template: Story = (args) => ({
  components: { TestComponent },
  template: `
    <div data-testid="test-component">
      <TestComponent @click="onClick" />
    </div>
  `,
  props: {},
  setup() {
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

export const basic = Template.bind({});
basic.args = {};
// basic.play = async ({ canvasElement }: StoryContext) => {
//   const canvas = within(canvasElement);
//   const cmp = canvas.getByTestId(CMP_NAME);
//   await expect(cmp).toBeInTheDocument();

//   // TEST: カウントアップされて 1 になるはず
//   await fireEvent.click(cmp);
//   await expect(emitCounter).toBe(1);
// };
basic.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const cmp = await canvas.getByText("CLICK ME");
  // await expect(cmp).toBeInTheDocument();

  await fireEvent.click(cmp);
  // await expect(emitCounter).toBe(1);
};
