import { expect, it } from "vitest";
import Text from "../../components/Text/Text";
import { renderWithProvider } from "../../testHelpers";

it("renders correctly", () => {
  const { asFragment } = renderWithProvider(<Text>tank</Text>);
  expect(asFragment()).toMatchInlineSnapshot(`
    <DocumentFragment>
      .c0 {
      color: var(--colors-text);
      font-weight: 400;
      line-height: 1.5;
      font-size: 16px;
    }

    <div
        class="c0"
      >
        tank
      </div>
    </DocumentFragment>
  `);
});
