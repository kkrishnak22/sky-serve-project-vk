import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledInput = styled("input")({
  display: "none",
});

const FileUploader = ({ onFileUpload }) => (
  <Box sx={{ textAlign: "center", margin: "20px 0" }}>
    <label htmlFor="file-upload">
      <StyledInput
        id="file-upload"
        type="file"
        multiple
        accept=".geojson,.kml"
        onChange={onFileUpload}
      />
      <Button
        variant="contained"
        component="span"
        color="primary"
        sx={{
          padding: "10px 20px",
          borderRadius: "8px",
          fontWeight: "600",
          marginTop: "10px",
        }}
      >
        Upload Files
      </Button>
    </label>
    <Typography
      variant="body2"
      color="text.secondary"
      sx={{ marginTop: "10px" }}
    >
      Supported formats: .geojson, .kml
    </Typography>
  </Box>
);

export default FileUploader;
