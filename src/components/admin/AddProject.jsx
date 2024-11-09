import React, { useState, useRef } from 'react';
import { Button, Col, Container, Row, Form } from 'react-bootstrap';
import { Paper, CircularProgress } from '@mui/material';
import AdminSidebar from './Sidebar';
import axios from 'axios';
import imageCompression from 'browser-image-compression';
import Cropper from 'react-cropper';
import 'cropperjs/dist/cropper.css';

const AddProject = () => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    image: null,
  });

  const [base64Image, setBase64Image] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [showCropper, setShowCropper] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const cropperRef = useRef(null);

  // Handle form input changes
  const handleOnChange = (e) => {
    const { name, type, value, files } = e.target;
    if (type === 'file' && files && files[0]) {
      const file = files[0];
      setSelectedImage(URL.createObjectURL(file));
      setShowCropper(true);
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  // Handle cropping and converting to base64
  const handleCrop = async () => {
    if (cropperRef.current && cropperRef.current.cropper) {
      const croppedCanvas = cropperRef.current.cropper.getCroppedCanvas({
        width: 800, // Set desired width
        height: 450, // Set desired height
        imageSmoothingEnabled: true,
        imageSmoothingQuality: 'high',
      });

      if (croppedCanvas) {
        const croppedBase64 = croppedCanvas.toDataURL('image/jpeg');
        // Compress the cropped image
        const compressedImage = await compressImage(croppedBase64);
        setBase64Image(compressedImage);
        setShowCropper(false);
      }
    }
  };

  // Compress the image using browser-image-compression
  const compressImage = async (base64Image) => {
    const file = await fetch(base64Image)
      .then((res) => res.blob())
      .then((blob) => new File([blob], 'cropped.jpg', { type: 'image/jpeg' }));

    const options = {
      maxSizeMB: 1,
      maxWidthOrHeight: 800,
      useWebWorker: true,
    };
    const compressedFile = await imageCompression(file, options);
    const reader = new FileReader();
    return new Promise((resolve) => {
      reader.readAsDataURL(compressedFile);
      reader.onloadend = () => {
        resolve(reader.result.toString());
      };
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    if (!formData.name || !formData.description || !base64Image) {
      setError('All fields are required');
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/projects/add`, {
        name: formData.name,
        description: formData.description,
        image: base64Image,
      });

      if (response.status === 201) {
        setSuccess('Project created successfully!');
        setFormData({ name: '', description: '', image: null });
        setBase64Image('');
      }
    } catch (err) {
      console.error('Error adding project:', err);
      setError('Failed to create project. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <AdminSidebar />
      <Container className="content-containerone my-4">
        <div className="add-head text-center mb-4">
          <h4>Add Project</h4>
        </div>
        <Paper elevation={2} className="content-paper p-4">
          {error && <div className="alert alert-danger">{error}</div>}
          {success && <div className="alert alert-success">{success}</div>}

          <form onSubmit={handleSubmit}>
            <Row>
              <Col lg={6}>
                <Form.Group controlId="name">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleOnChange}
                    placeholder="Enter project name"
                  />
                </Form.Group>

                <Form.Group controlId="description" className="mt-3">
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    as="textarea"
                    name="description"
                    value={formData.description}
                    onChange={handleOnChange}
                    rows={4}
                    placeholder="Enter project description"
                  />
                </Form.Group>
              </Col>

              <Col lg={6}>
                <Form.Group controlId="image" className="mt-3">
                  <Form.Label>Upload Image</Form.Label>
                  <Form.Control
                    type="file"
                    name="image"
                    accept="image/*"
                    onChange={handleOnChange}
                  />
                  {showCropper && (
                    <>
                      <Cropper
                        src={selectedImage}
                        style={{ height: 400, width: '100%' }}
                        aspectRatio={16 / 9}
                        guides={false}
                        ref={cropperRef}
                        viewMode={1}
                        minCropBoxHeight={10}
                        minCropBoxWidth={10}
                        background={false}
                        responsive={true}
                        autoCropArea={1}
                        checkOrientation={false}
                      />
                      <Button variant="success" onClick={handleCrop} className="mt-3">
                        Crop Image
                      </Button>
                    </>
                  )}
                  {base64Image && !showCropper && (
                    <img
                      src={base64Image}
                      alt="Preview"
                      className="img-thumbnail mt-3"
                      style={{ maxHeight: '200px' }}
                    />
                  )}
                </Form.Group>
              </Col>
            </Row>

            <div className="text-center">
              <Button
                variant="primary"
                type="submit"
                className="mt-4"
                disabled={loading}
              >
                {loading ? <CircularProgress size={20} /> : 'Add Project'}
              </Button>
            </div>
          </form>
        </Paper>
      </Container>
    </>
  );
};

export default AddProject;
