import { expect } from "@storybook/jest";
import { within } from "@storybook/testing-library";
import type { Story, Meta } from "@storybook/vue3";
import { action } from "@storybook/addon-actions";
import TestComponent from "@atoms/texts/base-text/base-text.vue";

const markdown = `
基本的なテキスト  
`;

// コンポーネントのメタデータを記述
export default {
  title: "Atoms/texts/base-text",
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
  const actionsData = {
    onClick: action("click"),
  };

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
Basic.args = {};
Basic.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const cmp = await canvas.getByText("SLOTS DUMMY");
  await expect(cmp).toBeInTheDocument();
};
