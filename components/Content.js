
import { tokens } from "@/app/theme";
import {
  Box,
  useTheme,
  Typography,
  Card,
  CardContent,
  TextField,
  Chip,
  Tooltip,
  Button,
} from "@mui/material";
import ReactQuill from "react-quill";
import { useState } from "react";
import "react-quill/dist/quill.snow.css";
import Image from "next/image";
import ImageUploading from "react-images-uploading";
import SyncAltOutlinedIcon from "@mui/icons-material/SyncAltOutlined";
import HighlightOffOutlinedIcon from "@mui/icons-material/HighlightOffOutlined";

export default function Content() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [title, setTitle] = useState(""); // İçerik başlığı
  const [description, setDescription] = useState(""); // İçerik yazısı tanımı
  const [editorValue, setEditorValue] = useState(""); // Text Editör değeri
  const [images, setImages] = useState(""); // Kapak resmi değeri
  const [tag, setTag] = useState(""); // Müstakil etiket değeri
  const [tags, setTags] = useState([]); // Etiketler
  const [tagId, setTagId] = useState(0); // Etiket ID değeri
  const [metaTitle, setMetaTitle] = useState(""); // Meta Title değeri
  const [metaDescription, setMetaDescription] = useState(""); // Meta description değeri

  const textFiledStyle = {
    // Textfield component'ına ait style bilgileri
    "& .MuiFormLabel-root.Mui-focused": {
      color: theme.palette.mode === "dark" ? `${colors.grey[400]}` : undefined,
    },
    "& .MuiOutlinedInput-root": {
      "&.Mui-focused fieldset": {
        borderColor:
          theme.palette.mode === "dark" ? `${colors.grey[400]}` : undefined,
      },
    },
    marginTop: "10px",
  };

  const toolbarOptions = {
    // Text Editor'a ait seçenekler

    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ["bold", "italic", "underline", "strike", "blockquote", "code-block"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image"],
      ["clean"],
    ], // remove formatting button
  };

  const imageChange = (imageList, addUpdateIndex) => {
    // data for submit
    //console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };

  const handleKeyDown = (event) => {
    //Etiketlerde 'Enter'a basıldığında işleyen fonksiyon
    if (event.key === "Enter") {
      setTags([...tags, { id: tagId, label: tag }]);
      setTagId(tagId + 1);
      setTag("");
    }
  };

  const handleTagDelete = (index) => () => {
    //Etiketlere ait Chip silme fonksiyonu
    setTags((current) => {
      return current.filter((chip) => chip.id !== index);
    });
  };

  const handleSubmit = (e) => {
    // Form submit fonksiyonu
    e.preventDefault();
  };

  return (
        <form onSubmit={handleSubmit}>
          <Box>
            {/* İÇERİK DETAYLARI BÖLÜMÜ */}
            <Card
              variant="outlined"
              sx={{
                borderRadius: "8px",
                backgroundColor:
                  theme.palette.mode === "dark" ? "#202a36" : undefined,
                boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
              }}
            >
              <CardContent>
                <Typography variant="h5" fontWeight="bold">
                  İçerik Detayları
                </Typography>
                <Typography variant="h6" color={colors.grey[400]}>
                  Başlık, tanımlama, kapak resmi vs.
                </Typography>
                <Box>
                  <TextField
                    id="title"
                    variant="outlined"
                    label="Başlık"
                    value={title && title}
                    onChange={(e) => setTitle(e.target.value)}
                    fullWidth
                    sx={textFiledStyle}
                  />
                  <TextField
                    fullWidth
                    id="description"
                    variant="outlined"
                    label="Tanımlama"
                    multiline
                    rows={4}
                    sx={textFiledStyle}
                    value={description && description}
                    onChange={(e) => setDescription(e.target.value)}
                  />

                  {/* İÇERİK */}
                  <Typography variant="h5" fontWeight="bold" marginTop={3}>
                    İçerik
                  </Typography>
                  <Box
                    mt={2}
                    sx={{
                      ".ql-toolbar": {
                        borderRadius: "5px 5px 0 0",
                        backgroundColor:
                          theme.palette.mode === "dark"
                            ? colors.blueAccent[400]
                            : undefined,
                      },
                      height: "200px",
                    }}
                  >
                    <ReactQuill
                      theme="snow"
                      value={editorValue}
                      onChange={setEditorValue}
                      placeholder="Eşsiz bir şeyler yaz..."
                      style={{
                        height: "150px",
                      }}
                      modules={toolbarOptions}
                    />
                  </Box>

                  {/* UPLOAD IMAGE */}
                  <Typography variant="h5" fontWeight="bold" marginTop={3}>
                    Kapak Resmi
                  </Typography>

                  <ImageUploading
                    value={images}
                    onChange={imageChange}
                    dataURLKey="data_url"
                  >
                    {({
                      imageList,
                      onImageUpload,
                      onImageUpdate,
                      onImageRemove,
                      isDragging,
                      dragProps,
                    }) => (
                      // write your building UI
                      <Box
                        height="250px"
                        border={`1px dotted ${colors.grey[400]}`}
                        borderRadius={2}
                        mt={1}
                        display="flex"
                        justifyContent="center"
                        alingitems="center"
                        sx={
                          isDragging
                            ? { backgroundColor: colors.grey[600] }
                            : null
                        }
                      >
                        <Box
                          width="100%"
                          height="100%"
                          component="div"
                          className="centeredBox"
                          borderRadius={2}
                        >
                          {!images && (
                            <Box className="centeredBox">
                              <Image
                                src="/assets/upload.png"
                                alt="upload-image-icon"
                                className="uploadImageLabel"
                                width={100}
                                height={100}
                                onClick={onImageUpload}
                                {...dragProps}
                              />
                              <Typography variant="h5" fontWeight="bold" mt={1}>
                                Sürükle veya dosya seç
                              </Typography>
                            </Box>
                          )}
                          {imageList.map((image, index) => (
                            <div key={index} className="image-item">
                              <img
                                src={image["data_url"]}
                                alt=" "
                                style={{
                                  width: "auto",
                                  height: "auto",
                                  maxHeight: "200px",
                                }}
                              />
                              <Box
                                width="100%"
                                display="flex"
                                flexDirection="row"
                                justifyContent="center"
                                alingitems="center"
                                columnGap={0.5}
                              >
                                <Tooltip title="Değiştir">
                                  <Box component="div">
                                    <Button
                                      variant={
                                        theme.palette.mode === "dark"
                                          ? "text"
                                          : "contained"
                                      }
                                      color="secondary"
                                      onClick={() => onImageUpdate(index)}
                                    >
                                      <SyncAltOutlinedIcon />
                                    </Button>
                                  </Box>
                                </Tooltip>
                                <Tooltip title="Kaldır">
                                  <Box component="div">
                                    <Button
                                      onClick={() => {
                                        onImageRemove(index);
                                        setImages("");
                                      }}
                                      variant={
                                        theme.palette.mode === "dark"
                                          ? "text"
                                          : "outlined"
                                      }
                                      color="error"
                                    >
                                      <HighlightOffOutlinedIcon />
                                    </Button>
                                  </Box>
                                </Tooltip>
                              </Box>
                            </div>
                          ))}
                        </Box>
                      </Box>
                    )}
                  </ImageUploading>
                </Box>
              </CardContent>
            </Card>

            {/* PROPERTIES */}
            <Card
              variant="outlined"
              sx={{
                borderRadius: "8px",
                backgroundColor:
                  theme.palette.mode === "dark" ? "#202a36" : undefined,
                marginTop: "20px",
                marginBottom: "20px",
                boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
              }}
            >
              <CardContent>
                <Typography variant="h5" fontWeight="bold">
                  SEO Bilgileri
                </Typography>
                <Typography variant="h6" color={colors.grey[400]}>
                  Etiketler, tanımlamalar vs.
                </Typography>
                <Box>
                  <TextField
                    fullWidth
                    id="tags"
                    variant="outlined"
                    label="Etiketler"
                    sx={textFiledStyle}
                    onChange={(e) => setTag(e.target.value)}
                    value={tag}
                    onKeyDown={handleKeyDown}
                  />
                  <Box m={1}>
                    {tags &&
                      tags.map((data) => (
                        <Chip
                          key={data.id}
                          label={data.label}
                          onDelete={handleTagDelete(data.id)}
                          sx={{ margin: "2px" }}
                        />
                      ))}
                  </Box>
                  <TextField
                    fullWidth
                    id="meta-title"
                    variant="outlined"
                    label="Meta title"
                    sx={textFiledStyle}
                    value={metaTitle && metaTitle}
                    onChange={(e) => setMetaTitle(e.target.value)}
                  />
                  <TextField
                    fullWidth
                    id="meta-description"
                    variant="outlined"
                    label="Meta description"
                    multiline
                    rows={4}
                    sx={textFiledStyle}
                    value={metaDescription && metaDescription}
                    onChange={(e) => setMetaDescription(e.target.value)}
                  />
                </Box>
              </CardContent>
            </Card>
          </Box>
          <Box
            mb={3}
            display="flex"
            justifyContent="flex-end"
            alingitems="center"
          >
            <Button
              variant="contained"
              color="secondary"
              type="submit"
              size="large"
            >
              <Typography fontWeight="bold">Oluştur</Typography>
            </Button>
          </Box>
        </form>
  );
}
