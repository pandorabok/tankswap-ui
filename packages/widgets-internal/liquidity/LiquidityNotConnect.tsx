import { useTranslation } from "@tankswap/localization";
import { Text } from "@tankswap/uikit";

export function LiquidityNotConnect() {
  const { t } = useTranslation();

  return (
    <Text color="textSubtle" textAlign="center">
      {t("Connect to a wallet to view your liquidity.")}
    </Text>
  );
}
