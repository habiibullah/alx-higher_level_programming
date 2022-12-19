#!/usr/bin/python3
from sys import stderr


def safe_print_integer_err(value):
        """Prints an integer with "{:d}".format().
    If a ValueError message is caught, a corresponding
    message is printed to standard error.
    Args:
        value (int): The integer to print.
    Returns:
        If a TypeError or ValueError occurs - False.
        Otherwise - True.
    """
    try:
        print("{:d}".format(value))
        return (True)
    except (TypeError, ValueError) as e:
        stderr.write("Exception: {}\n".format(e))
        return (False)
