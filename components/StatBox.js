import { Box, useTheme, Typography } from "@mui/material";
import { tokens } from "@/app/theme";
import ProgressCircle from "./ProgressCircle";

export default function StatBox({ title, subtitle, icon, progress, increase }) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box width="100%" padding="30px 20px">
      <Box display="flex" justifyContent="space-between">
        <Box
          width="50%"
          display="flex"
          flexDirection="column"
          justifyContent="space-around"
        >
          {icon}
          <Typography
            variant="h4"
            fontWeight="bold"
            sx={{ color: colors.grey[100] }}
          >
            {title}
          </Typography>
        </Box>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="flex-end"
          flexDirection="column"
          width="50%"
          mr={2}
        >
          <ProgressCircle progress={progress} />
          <Box>
            <Typography textAlign="right" variant="h5" sx={{ color: colors.greenAccent[500] }}>
              {subtitle}
            </Typography>
          </Box>
          <Box display="flex" justifyContent="space-between">
            <Typography
              variant="h5"
              fontStyle="italic"
              sx={{ color: colors.greenAccent[600] }}
            >
              {increase}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
