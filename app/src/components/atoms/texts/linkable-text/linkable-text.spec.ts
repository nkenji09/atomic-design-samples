import { render } from "@testing-library/vue";
import { composeStories } from "@storybook/testing-vue3";
import * as Stories from "./linkable-text.stories";

const name = "linkable-text";
const { Basic } = composeStories(Stories);
const instance = (Basic as CallableFunction)();

describe(`${name} storybook`, () => {
  test("クリックするとemitが実行される", async () => {
    const { container } = render(instance);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    await Stories.Basic.play?.({ canvasElement: container } as any);
  });
});
