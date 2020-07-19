from setuptools import setup, find_packages

setup(
    name="Personal Budget",
    description="Application for personal budgeting",
    version="1.0.0",
    packages=find_packages(),
    entry_points={"console_scripts": ["start-app = src.app:run"],},
    install_requires=["Flask==1.1.2", "Flask-Cors==3.0.8", "Flask-SQLAlchemy==2.4.3"],
)
