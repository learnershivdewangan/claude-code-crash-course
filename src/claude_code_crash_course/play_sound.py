import os
import subprocess


def main():
    # Get the directory where this script is located
    script_dir = os.path.dirname(os.path.abspath(__file__))
    # Construct the path to the ulala.wav file
    wav_path = os.path.join(script_dir, "..", "..", "ulala.wav")

    # Normalize the path
    wav_path = os.path.normpath(wav_path)

    print(f"Playing sound from: {wav_path}")

    # Play the sound using ffplay (hide window and auto-close after playing)
    # -nodisp: disable display
    # -autoexit: exit at end
    # -loglevel quiet: reduce output
    try:
        subprocess.run([
            "ffplay",
            "-nodisp",
            "-autoexit",
            "-loglevel", "quiet",
            wav_path
        ], check=True)
        print("Sound played successfully!")
    except subprocess.CalledProcessError as e:
        print(f"Error playing sound: {e}")
    except FileNotFoundError:
        print("ffplay not found. Please install ffmpeg to play audio files.")

if __name__ == "__main__":
    main()
    