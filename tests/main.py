import os
import sys
from frontend_app import config
from frontend_app.utils import logger

def main():
    # Initialize logger
    log = logger.get_logger(__name__)
    try:
        # Load configuration
        app_config = config.load_config()
        log.info("Loaded configuration successfully")
        
        # Initialize application
        from frontend_app.app import App
        app = App(app_config)
        log.info("Initialized application successfully")
        
        # Run application
        app.run()
        log.info("Application started successfully")
    except Exception as e:
        log.error(f"An error occurred: {str(e)}")
        sys.exit(1)

if __name__ == "__main__":
    main()