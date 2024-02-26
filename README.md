# Node.js Call Recording and microphone accessing APIs

This project implements a Node.js API for accessing the microphone and managing call recording.

## Features

- Start and stop microphone recording.
- Start and stop call recording.

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/bibek1123/Android-management-tool.git
    ```

2. Navigate to the project directory:

    ```bash
    cd api
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

## Usage

1. Start the Node.js server:

    ```bash
    npm start
    ```

2. Use the following API endpoints to control the camera and call recording:

    - `POST /startCameraRecording`: Start microphone recording.
    - `POST /stopCameraRecording`: Stop microphone recording.
    - `POST /startCallRecording`: Start call recording.
    - `POST /stopCallRecording`: Stop call recording.

## Contributing

Contributions are welcome! Please follow the [contribution guidelines](CONTRIBUTING.md) when contributing to this project.

## License

This project is licensed under the [MIT License](LICENSE).
