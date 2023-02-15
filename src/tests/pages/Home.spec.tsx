import { render, screen } from "@testing-library/react";
import { stripe } from "../../services/stripe";
import Home, { getStaticProps } from "../../pages";
import { mocked } from "jest-mock";

jest.mock("next/router", () => ({
  useRouter: jest.fn().mockReturnValue({
    push: jest.fn(),
  }),
}));

jest.mock("next-auth/react", () => {
  return { useSession: () => [null, false] };
});

jest.mock("../../services/stripe");

describe("Home page", () => {
  it("renders correctly", () => {
    render(<Home product={{ priceId: "fake-price-id", amount: "R$10,00" }} />);

    expect(screen.getByText("for R$10,00 month")).toBeInTheDocument();
  });

  it("Loads initial data", async () => {
    const stripeMocked = mocked(stripe.prices.retrieve);

    stripeMocked.mockResolvedValue({
      id: "fake-price-id",
      unit_amount: 1000,
    } as any);

    const response = await getStaticProps({});

    expect(response).toEqual(
      expect.objectContaining({
        props: {
          product: {
            priceId: "fake-price-id",
            amount: "$10.00",
          },
        },
      })
    );
  });
});
