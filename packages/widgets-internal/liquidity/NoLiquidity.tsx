import { useTranslation } from "@tankswap/localization";
import { Text } from "@tankswap/uikit";

export function NoLiquidity() {
  const { t } = useTranslation();

  return (
    <Text color="textSubtle" textAlign="center">
      {t("No liquidity found.")}
    </Text>
  );
}
